class homeSaucePage{
	
	elements = {
		usernameInput: () => cy.get('#user-name'),
		passwordInput: () => cy.get('#password'),
		loginBtn: () => cy.get('#login-button'),
		errorMessage: () => cy.get('h3[data-test="error"]'),
		url: () => cy.url()
	}
	
	typeUsername(username){
		this.elements.usernameInput().type(username);
	}
	
	typePassword(password){
		this.elements.passwordInput().type(password);
	}
	
	clickLogin(){
		this.elements.loginBtn().click();
	}
	
	urlSuccess(){
		this.elements.url().should('contains','/inventory.html');
		
	}
	msjError(errorMessage){
		this.elements.errorMessage().should('have.text',errorMessage);
		
	}
	
	
}

module.exports = new homeSaucePage();