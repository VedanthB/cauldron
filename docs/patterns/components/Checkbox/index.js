import React, { Component } from 'react';
import Demo from '../../../Demo';
import { className } from '../../../props';
import { Checkbox, FieldWrap } from '@deque/cauldron-react';
import FieldWrapNotice from '../../../FieldWrapNotice';

export default class CheckboxDemo extends Component {
  state = {
    mangoChecked: false
  };

  onMangoToggle = () => {
    const { mangoChecked } = this.state;
    this.setState({
      mangoChecked: !mangoChecked
    });
  };

  handleMangoChange = (e, mangoChecked) => {
    this.setState({ mangoChecked });
  };

  render() {
    return (
      <FieldWrap>
        <FieldWrapNotice />
        <Demo
          component={Checkbox}
          componentDescription={
            'Boxes that are checked when activated for selecting values. Typically used for submission in a form.'
          }
          states={[
            {
              id: 'demo-checkbox-1',
              name: 'demo-checkbox-1',
              label: 'Demo checkbox 1',
              value: '1'
            },
            {
              id: 'demo-checkbox-2',
              name: 'demo-checkbox-2',
              label: 'Demo checkbox 2 (default checked)',
              value: '2',
              checked: true
            },
            {
              id: 'demo-checkbox-3',
              name: 'demo-checkbox-3',
              label: 'Demo checkbox 3 (disabled)',
              value: '3',
              disabled: true
            },
            {
              id: 'demo-checkbox-4',
              name: 'demo-checkbox-4',
              label: 'Demo checkbox 4 (disabled)',
              value: '4',
              disabled: true,
              checked: true
            },
            {
              id: 'demo-checkbox-5',
              name: 'demo-checkbox-5',
              label: 'Demo checkbox 5',
              value: '5',
              error: 'The fifth checkbox is required!'
            },
            {
              id: 'demo-checkbox-6',
              name: 'demo-checkbox-6',
              label: 'Demo checkbox 6',
              labelDescription: 'Has description text',
              value: '6'
            },
            {
              id: 'demo-checkbox-7',
              name: 'demo-checkbox-7',
              label: 'Demo checkbox 7',
              labelDescription: 'Has description text',
              value: '7',
              error: "You made a mistake, but it's ok!"
            }
          ]}
          propDocs={{
            className,
            id: {
              type: 'string',
              description:
                'The id to be set on the input[type=checkbox] element',
              required: true
            },
            name: {
              type: 'string',
              description:
                'The name to be set on the input[type=checkbox] element',
              required: true
            },
            label: {
              type: 'node',
              description: "The text of the checkbox's label",
              required: true
            },
            labelDescription: {
              type: 'node',
              description: "The text description of the checkbox's label",
              required: true
            },
            value: {
              type: 'string',
              description:
                'The value to be set on the input[type=checkbox] element',
              required: true
            },
            checked: {
              type: 'boolean',
              description:
                'If the checkbox should be checked, which allows it to be "controlled"'
            },
            disabled: {
              type: 'boolean',
              description: 'If the checkbox should be disabled'
            }
          }}
        />
      </FieldWrap>
    );
  }
}
