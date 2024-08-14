import { joinClassNames } from '~/common/helpers/helpers.ts';
import styles from './message.module.css';

type Props = {
    content: string;
    isFromCurrentUser: boolean;
    isUpdated: boolean;
    sendAt: Date;
};

function Message({
    content,
    isFromCurrentUser,
    isUpdated,
    sendAt,
}: Props) {
    const messageInfo = isUpdated
        ? `Edited ${sendAt.toLocaleTimeString()}`
        : `${sendAt.toLocaleTimeString()}`;

    const messageClass = joinClassNames(
        styles['message']!,
        isFromCurrentUser
            ? styles['message_current-user']!
            : styles['message_other-user']!
    );

    return (
        <div className={messageClass}>
            <div className={styles['message__content']}>
                {content}
            </div>
            <div className={styles['message__info']}>
                {messageInfo}
            </div>
        </div>
    );
}

export { Message };
