import './App.css';
import UserCard from './Components/UserCard';


const UserData = [
  {
    name: "Zaneera",
    city: "Bangalore",
    profile: "Web Developer",
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'TypeScript', 'Python'],
    image: 'src/assets/pro.png'
  },
  {
    name: "Shahim",
    city: "Tirupur",
    profile: "Frontend Developer",
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'TypeScript', 'Python'],
    image: 'src/assets/pic.2.jpg'
  },
  {
    name: "Muzammil",
    city: "Chennai",
    profile: "Backend Developer",
    skill: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'TypeScript', 'Python'],
    image: 'src/assets/pic.3.jpg' 
  },
  
];

function App() {
  return (
    <>
      {/* Loop through the UserData array and render UserCard for each user */}
      {UserData.map((user, index) => (
        <UserCard 
          key={index}
          name={user.name}
          city={user.city}
          profile={user.profile}
          skill={user.skill}
          image={user.image} // Passing the image prop
        />
      ))}
    </>
  );
}

export default App;


