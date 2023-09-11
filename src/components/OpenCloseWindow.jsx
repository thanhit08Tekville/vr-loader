import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Algebra_Avatar from '../assets/images/Algebra.png';
import Geometry_Avatar from '../assets/images/Geometry.png';
import Operations_Avatar from '../assets/images/Operations.png';

const OpenCloseWindow = () => {
    // let openedWindow = null;

    const [selectedRoom, setSelectedRoom] = useState('');

    const handleRoomClick = (roomUrl) => {
        // const roomUrl = roomUrls[pictureUrl];
        setSelectedRoom(roomUrl);
        const newWindow = window.open(roomUrl, 'XR Room');

        // Listen for messages from Window B
        window.addEventListener('message', (event) => {
            // Check if the message is from Window B
            if (event.source === newWindow) {
                // Access the data sent from Window B
                const dataFromWindowB = event.data;

                // Check if the variable has changed
                if (dataFromWindowB.variableChanged) {
                    // Close Window B
                    newWindow.close();
                }
            }
        });

        // Save a reference to the child window
        setChildWindow(newWindow);
    };

    const roomPictures = [
        'Room01.png',
    ];

    const roomUrls = {
        'Room01.png': 'https://thanhit1990.github.io/vr-demo/',
    }

    const rooms = [
        { name: 'Algebra', pictureUrl: Algebra_Avatar, roomUrl: 'https://thanhit1990.github.io/vr-demo/' },
        { name: 'Geometry', pictureUrl: Geometry_Avatar, roomUrl: 'https://thanhit1990.github.io/vr-demo/' },
        { name: 'Operations', pictureUrl: Operations_Avatar, roomUrl: 'https://thanhit1990.github.io/vr-demo/' },
        // Add more rooms with their respective picture URLs
    ];



    const openWindow = () => {
        // Open a new window when the link is clicked
        const newWindow = window.open('https://thanhit1990.github.io/vr-demo/', 'WindowB');

        // Listen for messages from Window B
        window.addEventListener('message', (event) => {
            // Check if the message is from Window B
            if (event.source === newWindow) {
                // Access the data sent from Window B
                const dataFromWindowB = event.data;

                // Check if the variable has changed
                if (dataFromWindowB.variableChanged) {
                    // Close Window B
                    newWindow.close();
                }
            }
        });

        // Save a reference to the child window
        setChildWindow(newWindow);
    };

    // const closeWindow = () => {
    //     // Close the previously opened window
    //     if (openedWindow) {
    //         openedWindow.close();
    //     }
    // };

    return (
        // <div>
        //     {/* <button onClick={openWindow}>Open Window</button> */}
        //     {/* <button onClick={closeWindow}>Close Window</button> */}

        // </div>
        <Container>
            <Row>
                {rooms.map((room, index) => (
                    <Col key={index} xs={6} md={4} lg={3}>
                        <img
                            src={room.pictureUrl}
                            alt={room.name}
                            onClick={() => handleRoomClick(room.roomUrl)}
                            style={{ cursor: 'pointer', width: '150px', height: '150px' }}
                        />
                        <p>{room.name}</p>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default OpenCloseWindow;