import styles from './channel-header.module.css';

type Props = {
    channelName: string;
    participants: number;
};

function ChannelHeader({ channelName, participants }: Props) {
    return (
        <header className={styles['header']}>
            <h2 className={styles['channel-heading']}>
                {channelName}
            </h2>
            <h3 className={styles['channel-participants']}>
                {`${participants} participants`}
            </h3>
        </header>
    );
}

export { ChannelHeader };
