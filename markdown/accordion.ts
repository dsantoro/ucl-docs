export const accordion = `
# Accordion
### A vertically stacked set of interactive headings that each reveal an associated section of content.

~~~tsx
import * as Accordion from 'unstyled-component-library/accordion';

() => (
  <Accordion.Root>
    <Accordion.Item>
      <Accordion.Header>
        <Accordion.Trigger />
      </Accordion.Header>
      <Accordion.Content />
    </Accordion.Item>
  </Accordion.Root>
);
~~~
`