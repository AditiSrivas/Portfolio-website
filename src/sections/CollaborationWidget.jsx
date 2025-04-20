import { useState, useEffect } from 'react';

const CollaborationWidget = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [newUser, setNewUser] = useState(null);
  const [testimonial, setTestimonial] = useState(null);

  const testimonials = [
    { id: 1, name: "Sarah M.", avatar: "SM", comment: "Collaborating on this platform made our project come together so quickly!" },
    { id: 2, name: "David L.", avatar: "DL", comment: "I love how easy it is to see who's working alongside me." },
    { id: 3, name: "Priya K.", avatar: "PK", comment: "The real-time collaboration features saved our team hours of work." }
  ];

  const fakeUsers = [
    { id: 1, name: "Alex Johnson", avatar: "AJ", active: true },
    { id: 2, name: "Maria Garcia", avatar: "MG", active: true },
    { id: 3, name: "Tomas Lee", avatar: "TL", active: false },
    { id: 4, name: "Zoe Williams", avatar: "ZW", active: false },
    { id: 5, name: "Jamal Brown", avatar: "JB", active: false }
  ];

  useEffect(() => {
    setTestimonial(testimonials[Math.floor(Math.random() * testimonials.length)]);
    const storedUsers = localStorage.getItem('activeUsers');
    if (storedUsers) {
      try {
        const parsed = JSON.parse(storedUsers);
        setActiveUsers(parsed);
      } catch (e) {
        console.error('Error parsing stored users');
      }
    } else {
      const initialUsers = fakeUsers.filter(user => user.active).slice(0, 2);
      setActiveUsers(initialUsers);
    }
  }, []);

  useEffect(() => {
    const userActivityInterval = setInterval(() => {
      setActiveUsers(prev => {
        const inactiveUsers = fakeUsers.filter(user =>
          !prev.some(activeUser => activeUser.id === user.id)
        );

        if (inactiveUsers.length > 0 && Math.random() > 0.5) {
          const joiningUser = inactiveUsers[Math.floor(Math.random() * inactiveUsers.length)];
          setNewUser(joiningUser);
          setShowNotification(true);

          setTimeout(() => {
            setShowNotification(false);
          }, 3000);

          return [...prev, joiningUser];
        } else if (prev.length > 1 && Math.random() > 0.7) {
          const randomIndex = Math.floor(Math.random() * prev.length);
          const updated = [...prev];
          updated.splice(randomIndex, 1);
          return updated;
        }

        return prev;
      });
    }, 15000);

    return () => clearInterval(userActivityInterval);
  }, []);

  useEffect(() => {
    localStorage.setItem('activeUsers', JSON.stringify(activeUsers));
  }, [activeUsers]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg p-4 w-72">
        <h3 className="text-lg font-bold mb-3">People Collaborating</h3>

        <div className="mb-4">
          <div className="flex items-center space-x-1 mb-2">
            {activeUsers.map(user => (
              <div key={user.id} className="relative group">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {user.avatar}
                </div>
                <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-1 whitespace-nowrap">
                  {user.name}
                </div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full"></div>
              </div>
            ))}
            <div className="text-sm text-gray-300 ml-2">
              {activeUsers.length} active now
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-3">
          {testimonial && (
            <div className="text-sm italic text-gray-300">
              "{testimonial.comment}"
            </div>
          )}
        </div>
      </div>

      {showNotification && newUser && (
        <div className="absolute bottom-full mb-3 right-0 bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg animate-pulse w-72">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium mr-2">
              {newUser.avatar}
            </div>
            <div className="text-sm">
              {newUser.name} just joined the collaboration!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollaborationWidget;
