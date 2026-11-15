---
title: "Thinking in React: Composition"
author: "Rodrigo Villalba"
tags: ["development", "react"]
date: "2021-02-11T19:53:51.635Z"
summary: "Thinking in composition could be hard, the concept is simple, a component is composed of other components, but the path you should take to design with composition in mind it's not always clear"
---

A React Component represents an UI element and it can be composed of other components, but it is not always straightforward to think about composition when creating your own components, specially if you want them to be reusable.

For example a `Navbar` can be a component composed from navbar `Items`, but what happens when you want to reuse the same Navbar component in different use cases? Let's say you need one Navbar for authenticated users, but you also want to use the same component for guest users. How do you approach the design of such components?

In this article I share a few thoughts about reusable components and composition, based on my own experience of the past few years working with React.

## Wait as long as you can before thinking about reusability

The concept of reusability could be a whole blog post on its own but for this article I would just say that reusability should not be the first thing to think about when creating components. You should focus first on other more important aspects of component design like the name, the props and state.

If you need to create a `ComponentB` that is very similar to `ComponentA`, rather than modifying `ComponentA` it is best to copy paste the code from `ComponentA` to create `ComponentB` and adjust that component accordingly to cover that specific use case. You should wait to have at least three similar use cases in order to create one single generic component that covers all of those cases.

Premature reusability design could lead to a component that is hard to use and does too many things, which leads me to the next point.

## A component should do one thing well

For those who are familiar with the Single Responsability Principle from OOP, this also can be applied to React Components.

From the book Clean Code by Robert C. Martin:

> Single Responsability Principle (SRP) states that a class or module should have one, and only one, reason to change. The principle gives us both a definition of responsability, and a guideline for class size. Classes should have one responsability - one reason to change.

Meaning

**reason to change** _is equal to_ **responsability**

If we translate that to Components, there are a few ways of knowing if a Component has too many responsabilities.

## Props indicate responsabilities

Given the example.

```jsx
 <Navbar
    logoProps={{ svg, size, altText}}
    height={100}
    sticky={true}
    backgroundColor="blue"
    searchBarProps={{ onSearch, placeholer, icon }}
    navbarItems={NavItems}
 >
```

You can first see if it has too many props, the rule of thumb here is to see if using your component is starting to become a pain in the neck, because of how many props you need to pass, that's a signal of having too many props, too many responsablities.

Another aspect you could pay attention is the name of the props, in the above example `searchBar` and `items` could be passed as children of the Navbar instead of being props. Other component names for props could be a signal you can look for of having too many props.

The solution is to use **composition**.

```jsx
<Navbar
    height={100}
    sticky={true}
    backgroundColor="blue"
>
    <Logo>
    <SearchBar>
    <NavItems>
</Navbar>
```

## The name of the Component indicates responsabilities

You can also be aware of how you're naming your components, a complex name could be a sign of a complex component that does too many things. Using a lot of nouns in the name could also be indication of many responsabilities or even when you're tempted to use words like "Super" or "Generic" in the name of the component like "SuperDashboard" or "GenericTable".

```jsx
<GenericModalButton
  title="My Modal"
  modalFooterProps={ { okText: "Save"} }
  openModalButtonProps={ { text: "Open Modal" } }
>
```

In the above example the component includes in its name the nouns `Modal` and `Button` which could be two separate components rendered independently of each other, the only dependency being that the button opens the modal, but the button does not have to **belong to the** modal.

```jsx
<Button>Open Modal</Button>
<Modal title="My modal" footerProps={ { okText: "Save" } } />
```

But you could argue, what about if I want to use the same pattern of a button opening a modal in many different places? And that could be good argument but in this particular case, rendering two components repeatedly is not that bad. This goes back to the previous point of reusability, sometimes is better to repeat yourself than trying to generalize something that does not need to.

## Conclusions

Thinking in composition could be hard, the concept is simple, a component is composed of other components, but the path you should take to design with composition in mind it's not always clear. A couple of helpful tips are first and foremost, always try to keep your components smalls, not too many props and rather simple names. And finally, if you can, try to leave reusability concerns for later stages.
