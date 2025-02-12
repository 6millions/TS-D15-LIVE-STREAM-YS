import { useState, useRef, useEffect } from "react";

const isClient = typeof window !== "undefined";

export default function Live() {
    const [isJoined, setIsJoined] = useState(false);
    const videoRef = useRef<HTMLDivElement | null>(null);
    const [AgoraRTC, setAgoraRTC] = useState<any>(null); // Store AgoraRTC dynamically

    useEffect(() => {
        if (isClient) {
            import("agora-rtc-sdk-ng").then((module) => setAgoraRTC(module.default));
        }
    }, []);

    const startLiveStream = async () => {
        if (!isClient || !AgoraRTC) return;

        try {
            console.log("Starting live stream...");
            // print agora app id
            console.log(process.env.NEXT_PUBLIC_AGORA_APP_ID);

            const APP_ID = process.env.NEXT_PUBLIC_AGORA_APP_ID
            const CHANNEL_NAME = "test-channel"; // Your channel name
            const TEMP_TOKEN = null; // Use a token if required for authentication

            // Initialize Agora client
            AgoraRTC.setLogLevel(0);
            const agoraClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
            await agoraClient.join(APP_ID, CHANNEL_NAME, TEMP_TOKEN, null);

            // Create and play the local video track
            const track = await AgoraRTC.createCameraVideoTrack();

            if (videoRef.current) {
                track.play(videoRef.current);

                setTimeout(() => {
                    const videoElement = videoRef.current?.querySelector("video");
                    if (videoElement) {
                        videoElement.style.width = "100%";
                        videoElement.style.height = "100%";
                        videoElement.style.objectFit = "cover";
                        videoElement.style.position = "relative";
                    }
                }, 500);
            } else {
                console.error("VideoRef is null, cannot play track.");
            }

            // Publish the local track
            await agoraClient.publish([track]);

            // ✅ Mark the stream as joined
            setIsJoined(true);
        } catch (error) {
            console.error("Error starting live stream:", error);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-lg font-bold">Live Stream</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={startLiveStream}
                disabled={isJoined}  // ✅ Prevent double joining
            >
                {isJoined ? "Live Stream Started" : "Start Live Stream"}
            </button>

            <div
                ref={videoRef}
                className="w-full max-w-md h-64 border border-gray-300 rounded bg-black flex items-center justify-center overflow-visible relative"
            ></div>
        </div>
    );
}
