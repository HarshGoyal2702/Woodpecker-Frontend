import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const socket = io('http://localhost:5000');
    console.log("Socket establish")
    socket.on('notification', (newNotification) => {
      setNotifications([...notifications, newNotification]);
    });
    return () => {
      socket.disconnect();
    };
  }, [notifications]);

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
