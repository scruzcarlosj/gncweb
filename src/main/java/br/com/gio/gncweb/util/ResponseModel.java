package br.com.gio.gncweb.util;

public class ResponseModel<T extends Model> extends Response<T> {

	private T data;

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
	
}
