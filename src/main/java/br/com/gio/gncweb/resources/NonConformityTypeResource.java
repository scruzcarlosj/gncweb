package br.com.gio.gncweb.resources;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.gio.gncweb.model.User;
import br.com.gio.gncweb.service.BaseService;
import br.com.gio.gncweb.service.UserService;
import br.com.gio.gncweb.util.Response;

@Singleton
@Path("/nonconformitytypes")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class NonConformityTypeResource extends BaseResource<User> {
	
	@Inject
	private UserService service;
	
	@GET
	@Path("/{name}")
	public Response<List<User>> findByName(@PathParam("name") String name){
		
		List<User> users = service.findByName(name);
		return createSuccessResponseListModel(users);
	}


	@Override
	public BaseService<User> getService() {
		return service;
	}

	
	
}
