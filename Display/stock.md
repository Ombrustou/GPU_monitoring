```python
<div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="card my-3">
                            <div class="card-body">
                                <h5 class="card-title">Configuration</h5>
                                <button type="button" class="btn btn-primary mb-3" id="Update Interface" onClick="update_interface()">Update Interface</button>
                                <div class="form-group">
                                    <label for="global_conf">Global Configuration:</label>
                                    <textarea class="form-control pre-wrap hljs" id="global_conf" rows="15" resize="none">
                                    </textarea>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-primary mb-3 mx-auto d-block" id="saveChange" onClick="sendGlobalConf()">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="col-md-6 col-sm-12">
                        <div class="card my-3">
                            <div class="card-body">
                                <h5 class="card-title">Logs</h5>
                                <div class="d-flex justify-content-between align-items-center">
                                    <p id="LGName">Gateway Log:</p>
                                    <button type="button" class="btn btn-light" id="LGDownload"><img id="imgDownload" src="./img/download.png" alt="Download Logs" class="img-fluid"></button>
                                </div>
                                <perfect-scrollbar class="ps-show-limits">
                                    <div style="position: static;" class="ps ps--active-y">
                                    <div class="ps-content">
                                        <textarea id="LGLogs" class="form-control pre-wrap" rows="11" readonly></textarea>
                                    </div>
                                    </div>
                                </perfect-scrollbar>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
```