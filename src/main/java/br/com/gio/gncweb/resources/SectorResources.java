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

import br.com.gio.gncweb.model.Sector;
import br.com.gio.gncweb.service.BaseService;
import br.com.gio.gncweb.service.SectorService;
import br.com.gio.gncweb.util.Response;

@Singleton
@Path("/sectors")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class SectorResources extends BaseResource<Sector> {
	
	@Inject
	private SectorService service;
	
	@GET
	@Path("/{name}")
	public Response<List<Sector>> findByName(@PathParam("name") String name){
		
		List<Sector> sectors = service.findByName(name);
		return createSuccessResponseListModel(sectors);
	}

	@Override
	public BaseService<Sector> getService() {
		return service;
	}
	
	
	

	
	
}
