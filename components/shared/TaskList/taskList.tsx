import React, { ReactNode } from 'react';
import './taskList.scss'
import { Todo } from '../../ui/index';

interface Props {
  children: ReactNode
}

export const TaskList: React.FC<Props> = ({children}) => {
  return (
    <ul>
        {children}
    </ul>
  );
};