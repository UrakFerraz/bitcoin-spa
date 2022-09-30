import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders a message", () => {
    const msg = "Hello Cypress Component Testing!";
    cy.mount(HelloWorld, {
      propsData: {
        msg,
      },
    });

    cy.get("h1").should("have.text", msg);
  });
});
