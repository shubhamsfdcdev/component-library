# Communication Mechanisms in the Aura Framework
In the Aura framework, there are three primary MECHANISM OF COMMUNICATION between components: 

## 1. Aura Methods:
   - Use Aura methods when you need to invoke a method in a child component from its parent or vice versa.
   - Use Aura methods when you want to pass data between components that are in a parent-child relationship.
   - Aura methods are ideal for synchronous communication between components.
   - Example use case: Invoking a method in a child component to retrieve updated data and refresh the parent component's view.

## 2. Application Events:
   - Use application events when you need to communicate between unrelated components, even those that are not in a parent-child relationship.
   - Application events are useful when multiple components need to listen to and respond to the same event.
   - Application events are asynchronous and allow loosely coupled communication.
   - Example use case: Broadcasting a global notification to multiple components when a specific action occurs, such as a record being created or updated.

## 3. Component Events:
   - Use component events when you need to communicate between related components that are nested within a common parent component.
   - Component events are specific to the component hierarchy in which they are defined.
   - Component events enable communication between components at different levels of the hierarchy without needing to bubble up to the application level.
   - Aura methods are ideal for synchronous communication between components.
   - Example use case: Notifying a parent component about an event that occurred in its child component, such as a button click or form submission.

# Event Propagation Model in the Aura Framework

In the Aura framework, the event propagation model includes the concepts of the event capture phase and event bubble phase.

- Root - ParentComponent
- Container - ChildComponent
- Source - GrandChildComponent

## 1. Event Capture Phase:
   - During the event capture phase, the event travels from the outermost ancestor component(root) down to the component(source) where the event was originally fired.
   - Use Case: The capture phase is useful when you want to handle an event at a higher-level ancestor component before it reaches the component where the event was triggered. This allows you to intercept and process the event at an earlier stage in the component hierarchy.
   - Event propagation: source -> root -> container

## 2. Event Bubble Phase:
   - After the event capture phase, the event enters the bubble phase, where it travels from the component(source) where it was triggered up to the outermost ancestor component(root).
   - Use Case: The bubble phase is useful when you want to handle an event at a higher-level ancestor component after it has propagated through the component hierarchy. This allows you to respond to the event and perform any necessary actions at a higher level.
   - Event propagation: source -> container -> root

It's important to note that in Aura, by default, events follow the bubble phase.

If you want to handle events during the capture phase or have more control over event propagation, you can utilize the event propagation methods provided by the Aura framework. Here's an alternative approach using the `stopPropagation()` and `stopImmediatePropagation()` methods:

1. `stopPropagation()`:
   - When called within an event handler, `stopPropagation()` prevents the event from propagating further in the component hierarchy during the bubble phase.
   - However, other event handlers attached to the same component will still be executed.
   - In other words, it stops the event from reaching higher-level ancestor components but allows other event handlers within the same component to be executed.
   - Use `event.stopPropagation()` when you want to prevent the event from being handled by higher-level ancestor components but still want other event handlers within the current component to execute.

2. `stopImmediatePropagation()`:
   - When called within an event handler, `stopImmediatePropagation()` not only stops the event from propagating further but also prevents any additional event handlers from being executed, including those attached to the same component.
   - It halts event propagation completely, even within the same component.
   - Use `event.stopImmediatePropagation()` when you want to completely stop event propagation, preventing any further event handlers from executing.
