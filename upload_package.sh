fct (){ 
    cd data_storage
    docker build -t ghcr.io/ombrustou/gpu_monitoring/data-storage:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/data-storage:$1 ghcr.io/ombrustou/gpu_monitoring/data-storage:latest
    docker push ghcr.io/ombrustou/gpu_monitoring/data-storage:$1
    docker push ghcr.io/ombrustou/gpu_monitoring/data-storage:latest

    cd ../API
    docker build -t ghcr.io/ombrustou/gpu_monitoring/api:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/api:$1 ghcr.io/ombrustou/gpu_monitoring/api:latest
    docker push ghcr.io/ombrustou/gpu_monitoring/api:$1
    docker push ghcr.io/ombrustou/gpu_monitoring/api:latest

    cd ../Display
    docker build -t ghcr.io/ombrustou/gpu_monitoring/display:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/display:$1 ghcr.io/ombrustou/gpu_monitoring/display:latest
    docker push ghcr.io/ombrustou/gpu_monitoring/display:$1
    docker push ghcr.io/ombrustou/gpu_monitoring/display:latest

    cd ../Gathering_DATA
    docker build -t ghcr.io/ombrustou/gpu_monitoring/gathering-data:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/gathering-data:$1 ghcr.io/ombrustou/gpu_monitoring/gathering-data:latest
    docker push ghcr.io/ombrustou/gpu_monitoring/gathering-data:$1
    docker push ghcr.io/ombrustou/gpu_monitoring/display:latest
}

fct $1