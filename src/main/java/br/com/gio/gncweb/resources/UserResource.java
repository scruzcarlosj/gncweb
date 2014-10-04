package br.com.gio.gncweb.resources;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.gio.gncweb.model.User;
import br.com.gio.gncweb.service.BaseService;
import br.com.gio.gncweb.service.UserService;



@RequestScoped
@Path("/users")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class UserResource extends BaseResource<User> {
	
	@Inject
	private UserService service;


	@Override
	public BaseService<User> getService() {
		return service;
	}

	
	
}
