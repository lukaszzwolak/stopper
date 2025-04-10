import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
    const formatTime = (milliseconds) => {
        const ms = milliseconds % 1000;
        const totalSeconds = Math.floor(milliseconds / 1000);
        const seconds = totalSeconds % 60;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const hours = Math.floor(totalSeconds / 3600);

        const pad = (val, digits = 2) => String(val).padStart(digits, '0');
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(ms, 3)}`;
    };

    return (
        <div className={styles.component}>
            {formatTime(time)}
        </div>
    );
};

export default FormattedTime;
