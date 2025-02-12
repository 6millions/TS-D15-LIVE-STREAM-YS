import { useRef, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { agoraClient } from "@/lib/agora"; // ✅ Correct import

const AGORA_APP_ID = "77ade543f15b4d3483826f8782dc3018"; // Replace with your actual Agora App ID
const CHANNEL_NAME = "test-channel"; // You can use a dynamic channel name
const TEMP_TOKEN = null; // Set this to a valid token if your app requires authentication

export default function LiveStream() {
    const [isJoined, setIsJoined] = useState(false);
    const videoRef = useRef<HTMLDivElement>(null);

    const startLiveStream = async () => {
        try {
            await agoraClient.join(AGORA_APP_ID, CHANNEL_NAME, TEMP_TOKEN, null);
            const localTrack = await AgoraRTC.createCameraVideoTrack();
            await agoraClient.publish([localTrack]);

            if (videoRef.current) {
                localTrack.play(videoRef.current);
            }

            setIsJoined(true);
        } catch (error) {
            console.error("Error starting live stream:", error);
        }
    };

    const stopLiveStream = async () => {
        await agoraClient.leave();
        setIsJoined(false);
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-2xl font-bold">Live Streaming</h1>
            <div ref={videoRef} className="w-80 h-60 bg-gray-300"></div>
            {isJoined ? (
                <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={stopLiveStream}>
                    Stop Streaming
                </button>
            ) : (
                <button className="px-4 py-2 bg-green-500 text-white rounded" onClick={startLiveStream}>
                    Start Streaming
                </button>
            )}
        </div>
    );
}
