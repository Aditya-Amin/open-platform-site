$(document).ready(function() {
	    	var viewModel = {

	    		contactName : ko.observable(""),
	    		email : ko.observable(""),
				productDetails : ko.observable(""),
				company : ko.observable(""),
	
		        postForm : function(formElement) {
		            var self = this;
		            contactName = self.contactName();
		            email = self.email();
					productDetails = self.productDetails();
					company = self.company();
					
					html = 'Please contact the following company for syndicaton access to the Content API ' + 
							'<p>Name: ' + contactName + '</p>' +
							'<p>Email: ' + email + '</p>' +
							'<p>Product details : ' + productDetails + '</p>' +
							'<p>Company: ' + company + '</p>';

					$.ajax({
					  type: 'POST',
					  url: "https://mandrillapp.com/api/1.0/messages/send.json",
					  data: {
					    'key': 'to-do',
					    'message': {
					      'from_email': email,
					      'to': [
					          {
					            'email': 'to-do',
					            'name': 'Guardian - syndication',
					            'type': 'to'
					          }	
					        ],
					      'autotext': 'true',
					      'subject': 'New syndication request',
					      'html': html
					    }
					  }
					 }).done(function(response) {
					   console.log(response); 
					});

		        }
	    	};
	    
    	ko.applyBindings(viewModel);
		});
