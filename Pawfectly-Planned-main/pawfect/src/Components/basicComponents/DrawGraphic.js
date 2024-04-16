import React, { useEffect, useRef, useState } from 'react';

function DrawGraphic({val}) {
    const canvasRef = useRef(null);
    const [hoveredSection, setHoveredSection] = useState(null);
    const disp = ['Completed', 'Left to do', 'Other'];
    const sizes = [50, 20, 30];

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const outerRadius = 100;
        const innerRadius = 70; // Adjust this value for the size of the hollow center

        const colors = ['#2233ff', '#33FF57', '#5733FF', '#FFFF33', '#FF33FF', '#33FFFF', '#FF5733'];

        const handleMouseOver = (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const angle = Math.atan2(y - centerY, x - centerX);
            const normalizedAngle = angle < 0 ? 2 * Math.PI + angle : angle;

            let startAngle = 0;
            for (let i = 0; i < sizes.length; i++) {
                const endAngle = startAngle + (sizes[i] / 100) * (2 * Math.PI);
                if (normalizedAngle >= startAngle && normalizedAngle <= endAngle) {
                    setHoveredSection(i);
                    return;
                }
                startAngle = endAngle;
            }
            setHoveredSection(null);
        };

        canvas.addEventListener('mousemove', handleMouseOver);

        // Draw the hollow center


        // Draw sections
        let startAngle = 0;
        for (let i = 0; i < sizes.length; i++) {
            const endAngle = startAngle + (sizes[i] / 100) * (2 * Math.PI);
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = colors[i % colors.length];
            ctx.fill();

            startAngle = endAngle;
        }
        ctx.beginPath();
        ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFFFFF'; // Set the fill color to match your background
        ctx.fill();

        // Draw the outer boundary
        ctx.beginPath();
        ctx.arc(centerX, centerY, outerRadius, 0, 2 * Math.PI);
        ctx.strokeStyle = '#000000'; // Set the stroke color for the boundary
     //   ctx.lineWidth = 2; // Set the line width for the boundary
        ctx.stroke();
        return () => {
            canvas.removeEventListener('mousemove', handleMouseOver);
        };
    }, []);

    return (
        <div>
            {hoveredSection !== null && (
                <div>
                    {disp[hoveredSection]}: {Math.round(sizes[hoveredSection])}%
                </div>
            )}
            <canvas ref={canvasRef} width={400} height={400}></canvas>
        </div>
    );
}

export default DrawGraphic;
