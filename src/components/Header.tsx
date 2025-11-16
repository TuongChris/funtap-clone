import { useState } from "react";
import DialogUser from "./Dialogs/DialogUser";
import HeaderComponent from "./HeaderComponent";
import DropdownNotification from "./Dropdowns/DropdownNotification";

const Header = ({ isAuthenticated, user, navigate, logout }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      {isAuthenticated && user && <DropdownNotification />}
    </>
  );
};

export default Header;
