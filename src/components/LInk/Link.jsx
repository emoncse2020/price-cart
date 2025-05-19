const Link = ({ route }) => {
  return (
    <li className="mr-4 hover:bg-yellow-300 px-6">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
