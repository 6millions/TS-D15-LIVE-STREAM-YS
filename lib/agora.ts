import AgoraRTC from "agora-rtc-sdk-ng";

const isClient = typeof window !== "undefined"; // Ensure running on the client side

/**
 * Initialize Agora client safely
 */
export const initializeAgoraClient = () => {
    if (!isClient) return null;

    return AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
};

// ✅ Export the initialized client instance
export const agoraClient = initializeAgoraClient();
