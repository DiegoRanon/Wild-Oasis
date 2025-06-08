import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckinOut } = useCheckout();

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => {
        console.log("booking id : " + bookingId);
        checkout(bookingId);
      }}
      disabled={isCheckinOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
