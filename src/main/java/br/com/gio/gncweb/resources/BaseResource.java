package br.com.gio.gncweb.resources;

import java.util.List;

import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;

import br.com.gio.gncweb.service.BaseService;
import br.com.gio.gncweb.util.Model;
import br.com.gio.gncweb.util.ReponseListModel;
import br.com.gio.gncweb.util.Response;
import br.com.gio.gncweb.util.ResponseModel;
import br.com.gio.gncweb.util.Status;

public abstract class BaseResource<T extends Model> {
	
	@GET
	public Response<List<T>> get(){
		return createSuccessResponseListModel(getService().findAll());
	}
	
	@GET
	@Path("/{id : [0-9]+}")
	public Response<T> get(@PathParam("id") Long id){
		return createSuccessResponseModel(getService().findById(id));
	}
	
	@POST
	public Response<T> post(T model){
		getService().create(model);
		return createSuccessResponseModel(model);
	}
	
	@PUT
	public Response<T> put(T model){
		getService().update(model);
		return createSuccessResponseModel(model);
	}
	
	@DELETE
	@Path("/{id : [0-9]+}")
	public Response<T> remove(@PathParam("id") Long id){
		getService().remove(id);
		return createSuccessResponseModel(null);
	}
	

	protected Response<T> createSuccessResponseModel(T data){
		Response<T> response = new ResponseModel<T>();
		response.setStatus(Status.SUCCESS);
		response.setData(data);
		return response;
	}
	
	protected Response<List<T>> createSuccessResponseListModel(List<T> data){
		Response<List<T>> response = new ReponseListModel<T>();
		response.setStatus(Status.SUCCESS);
		response.setData(data);
		return response;
	}
	
	public abstract BaseService<T> getService();
	
}
