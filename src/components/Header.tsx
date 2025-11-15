import DialogUser from "./DialogUser";
import HeaderComponent from "./HeaderComponent";

const Header = ({
  isAuthenticated,
  user,
  setIsDialogOpen,
  navigate,
  isDialogOpen,
  logout,
}) => {
  return (
    <>
      <HeaderComponent
        isAuthenticated={isAuthenticated}
        user={user}
        setIsDialogOpen={setIsDialogOpen}
        navigate={navigate}
      />
      {isAuthenticated && user && (
        <DialogUser
          user={user}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          logout={logout}
        />
      )}
    </>
  );
};

export default Header;
