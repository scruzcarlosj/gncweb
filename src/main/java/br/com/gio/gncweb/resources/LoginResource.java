package br.com.gio.gncweb.resources;

import javax.inject.Singleton;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import br.com.gio.gncweb.model.User;
import br.com.gio.gncweb.util.Response;

@Singleton
@Path("/security")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginResource {
	
	@POST
	public Response<User> login(@Context HttpServletRequest request, User user){
		try{
			request.login(user.getEmail(), user.getPassword());
		} catch (Exception ex){
			ex.printStackTrace();
		}
		return null;
	}
	
}
