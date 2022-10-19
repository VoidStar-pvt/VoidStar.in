

			jQuery('#frmsubmit').on('submit',function (e) 
			{
				e.preventDefault();
				jQuery('#msg').html('Please Wait...');
				jQuery('#btnsubmit').attr('disabled',true);
				jQuery.ajax({
					url:'https://script.google.com/macros/s/AKfycbwQnk-NhdpYdzdW1BEAG6TjU7IwezR-eIq38FUaJBeAdIFGHDWR4PBOeYTJE2qCqS8KDw/exec',
					type:'post',
					data:jQuery('#frmsubmit').serialize(),
					success:function(result)
					{
				        jQuery('#frmsubmit')[0].reset();
						//jQuery('#msg').html('Thank You...');
						jQuery('#btnsubmit').attr('disabled',false);
						window.location.replace("thankuu.html");
						
					} 
		
				});   
			});
			
			