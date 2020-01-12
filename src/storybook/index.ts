import { configure } from '@storybook/react';
import * as DomainList from './stories/DomainList.stories';
import * as Header from './stories/Header.stories';
import * as Form from './stories/Form.stories';
import * as RecordList from './stories/RecordList.stories'

configure(() => [DomainList, Header, Form, RecordList], module);
