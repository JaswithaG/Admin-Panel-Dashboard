import "./WalletCard.css";
import {
  FaWallet,
  FaArrowUp,
} from "react-icons/fa";

const WalletCard = () => {
  return (
    <div className="wallet-card">

      <div className="wallet-header">

        <div>

          <p>Wallet Balance</p>

          <h2>$24,680</h2>

        </div>

        <div className="wallet-icon">
          <FaWallet />
        </div>

      </div>

      <div className="wallet-info">

        <div>

          <span>Income</span>

          <h4>
            <FaArrowUp />
            $8,240
          </h4>

        </div>

        <div>

          <span>Expenses</span>

          <h4>$3,180</h4>

        </div>

      </div>

    </div>
  );
};

export default WalletCard;