import React, { Component, useEffect, useState } from 'react';
import Demo from '../../../Demo';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  AccordionTwo,
  AccordionContainer,
  AccordionPanelTrigger,
  AccordionContent,
  Checkbox,
  IconButton
} from '@deque/cauldron-react/';
import { className } from '../../../props';
import {
  ExpandCollapsePanel,
  PanelTrigger
} from '../../../../packages/react/lib';
import classNames from 'classnames';

export const AccordionDemo = () => {
  return (
    <div>
      <h1>Accordion</h1>
      <h2>Demo</h2>
      <h3>Controlled</h3>
      <ControlledAccordion />
      <ControlledAccordion />
      <h3>Uncontrolled</h3>
      <AccordionTwo>
        <AccordionContainer>
          <AccordionPanelTrigger
            className="Accordion__trigger"
            iconExpanded="triangle-down"
            iconCollapsed="triangle-right"
          >
            This is a trigger
          </AccordionPanelTrigger>
          <AccordionContent className="Accordion__panel">
            Here is some content
          </AccordionContent>
        </AccordionContainer>
      </AccordionTwo>
      <h3>Advanced</h3>
      <CheckboxAccordion />
      <h2>Code Sample</h2>
    </div>
  );
};

AccordionDemo.displayName = 'AccordionDemo';

const ControlledAccordion = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <AccordionTwo>
      <AccordionContainer
        open={open}
        onToggle={() => setIsOpen(!open)}
        tabIndex={0}
        setIsOpen={setIsOpen}
      >
        <AccordionPanelTrigger
          className={classNames(
            open
              ? 'Accordion__trigger underline expanded'
              : 'Accordion__trigger underline'
          )}
          iconExpanded="triangle-down"
          iconCollapsed="triangle-right"
        >
          This is a trigger
        </AccordionPanelTrigger>
        <AccordionContent className="Accordion__panel">
          Here is some content
        </AccordionContent>
      </AccordionContainer>
    </AccordionTwo>
  );
};

const CheckboxAccordion = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <AccordionTwo>
      <AccordionContainer
        open={open}
        onToggle={() => setIsOpen(!open)}
        tabIndex={0}
        iconExpanded="triangle-down"
        iconCollapsed="triangle-right"
        shouldHideIcon
      >
        <AccordionPanelTrigger
          className={classNames(
            open ? 'Accordion__trigger expanded' : 'Accordion__trigger'
          )}
        >
          <div className="checkbox-demo">
            <Checkbox label="Some text and stuff" />
            <IconButton
              icon={open ? 'triangle-down' : 'triangle-right'}
              label={open ? 'Close panel' : 'Open panel'}
              tooltipPlacement="left"
            />
          </div>
        </AccordionPanelTrigger>
        <AccordionContent className="Accordion__panel">
          Here is some content
        </AccordionContent>
      </AccordionContainer>
    </AccordionTwo>
  );
};

export default AccordionDemo;
