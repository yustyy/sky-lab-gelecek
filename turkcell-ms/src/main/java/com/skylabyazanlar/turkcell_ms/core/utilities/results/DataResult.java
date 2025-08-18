package com.skylabyazanlar.turkcell_ms.core.utilities.results;

import org.springframework.http.HttpStatus;

public class DataResult<T> extends Result {

    private T data;

    public T getData() {
        return data;
    }

    public DataResult(T data, boolean success, String message, HttpStatus httpStatus, String path) {
        super(success, message, httpStatus, path);
        this.data = data;

    }

    public DataResult(T data, boolean success, HttpStatus httpStatus, String path) {
        super(success, httpStatus, path);
        this.data = data;
    }

}