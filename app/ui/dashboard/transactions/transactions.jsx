import Image from 'next/image';
import styles from './transactions.module.css';

function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={'/noavatar.png'}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>13-11-2023</td>
            <td>Rp. 135.000</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={'/noavatar.png'}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>13-11-2023</td>
            <td>Rp. 58.100</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={'/noavatar.png'}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Jaka Sembung
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>11-11-2023</td>
            <td>Rp. 78.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
