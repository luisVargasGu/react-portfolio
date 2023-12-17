import { useEffect, useState } from 'react';
import './index.scss';
import './walkArrow.scss'

const Contact = () => {
    const [position, setPosition] = useState({ x: 50, y: 50 });
    const [tail, setTail] = useState([]);
    const spacing = 10;

    useEffect(() => {
        const moveHead = () => {
            // Calculate the new position randomly
            const step = 1;
            const direction = Math.floor(Math.random() * 4); // 0: up, 1: right, 2: down, 3: left

            let newX = position.x;
            let newY = position.y;

            switch (direction) {
                case 0:
                    newY = Math.max(newY - step, 10); // Ensure newY does not go below 0
                    break;
                case 1:
                    newX = Math.min(newX + step, 80); // Ensure newX does not exceed 100
                    break;
                case 2:
                    newY = Math.min(newY + step, 80); // Ensure newY does not exceed 100
                    break;
                case 3:
                    newX = Math.max(newX - step, 10); // Ensure newX does not go below 0
                    break;
                default:
                    break;
            }

            // Update the tail
            setTail((prevTail) => {
                const newTail = [...prevTail, { x: position.x, y: position.y }];

                // Limit the tail length to 4
                if (newTail.length > 4) {
                    newTail.shift(); // Remove the oldest tail element
                }

                return newTail;
            });

            // Update the head position
            setPosition({ x: newX, y: newY });
        };

        // Call moveHead every 500 milliseconds (adjust as needed)
        const intervalId = setInterval(moveHead, 500);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [position, setTail]);

    return (
        <div className='about-container'>
            <div className='carousel-container'>
                <div className="head" style={{ left: `${position.x}%`, top: `${position.y}%` }}>
                    X</div>
                {tail.map((segment, index) => (
                    <div
                        key={index}
                        className="tail-segment"
                        style={{
                            left: `calc(${segment.x}% - ${spacing * (index + 1)}px)`,
                            top: `calc(${segment.y}% - ${spacing * (index + 1)}px)`,
                        }}
                    >-</div>
                ))}
            </div>
        </div>
    );
};

export default Contact
