package br.com.gio.gncweb.util;

public abstract class Response<T> {

	private Status status;
	
	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public abstract T getData();
	
	public abstract void setData(T data);
}
