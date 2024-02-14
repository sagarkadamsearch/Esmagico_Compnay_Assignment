import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Add this import
import { useTimeout } from '@chakra-ui/react';

const HalfCircleChart = ({ principalAmount, interestAmount }) => {


  useEffect(() => {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    const myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
      
        datasets: [
          {
            data: [principalAmount, interestAmount],
            backgroundColor: ['#FF0096', '#BFBFBF'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '50%',
        rotation: 270, 
        circumference:180 // Adjust the cutout percentage to make it a semi-circle
      },
    });

    // Cleanup function to destroy the chart when the component is unmounted
    return () => {
      myPieChart.destroy();
    };

  }, [principalAmount, interestAmount]);

  return (
    <div style={{ height: '200px', width: '200px' }}>
      <canvas id="myPieChart"></canvas>
    </div>
  );
};

export default HalfCircleChart;
