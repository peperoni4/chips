import { Message as MessageType } from '~/common/types/types.ts';
import { Message } from '../message/message.tsx';

import styles from './message-list.module.css';

type Props = {
    messages: MessageType[];
};

function MessageList({ messages }: Props) {
    const currentUserId = messages[0]?.from ?? 0;

    if (messages.length === 0) {
        return (
            <div style={{ textAlign: 'center' }}>
                Seems like no one have written any message!
                <br />
                Be the first one!
            </div>
        );
    }

    return (
        <div className={styles['message-list']}>
            {messages.map(message => (
                <Message
                    key={message.id}
                    content={message.content}
                    isFromCurrentUser={currentUserId === message.from}
                    isUpdated={
                        message.createdAt.getMilliseconds() !==
                        message.updatedAt.getMilliseconds()
                    }
                    sendAt={
                        message.createdAt.getMilliseconds() >=
                        message.updatedAt.getMilliseconds()
                            ? message.createdAt
                            : message.updatedAt
                    }
                />
            ))}
        </div>
    );
}

export { MessageList };
