
import dgram from "dgram";


const socket = dgram.createSocket('udp4');
const PORT = 41234;
const BROADCAST_ADDR = "255.255.255.255";

const BoardcastService = () => {
    socket.on("message", (msg, rinfo) => {
        console.log(`Got message: ${msg} from ${rinfo.address}:${rinfo.port}`);
    });


    socket.bind(PORT, () => {
        socket.setBroadcast(true);

        console.log(`Listening for UDP messages on port ${PORT}`);

        // Send broadcast every 5s
        setInterval(() => {
            const message = Buffer.from("DISCOVER_REQUEST");
            socket.send(message, 0, message.length, PORT, BROADCAST_ADDR, () => {
                console.log("Sent DISCOVER_REQUEST");
            });
        }, 5000);
    });



}

export default BoardcastService;
