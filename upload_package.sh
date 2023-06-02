fct (){
    cd data_storage
    docker build -t ghcr.io/ombrustou/gpu_monitoring/data-storage:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/data-storage:$1 ghcr.io/ombrustou/gpu_monitoring/data-storage:lastest
    docker push ghcr.io/ombrustou/gpu_monitoring/data-storage

    cd ../API
    docker build -t ghcr.io/ombrustou/gpu_monitoring/api:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/api:$1 ghcr.io/ombrustou/gpu_monitoring/api:lastest
    docker push ghcr.io/ombrustou/gpu_monitoring/api

    cd ../Display
    docker build -t ghcr.io/ombrustou/gpu_monitoring/display:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/display:$1 ghcr.io/ombrustou/gpu_monitoring/display:lastest
    docker push ghcr.io/ombrustou/gpu_monitoring/display

    cd ../Gathering_DATA
    docker build -t ghcr.io/ombrustou/gpu_monitoring/gathering-data:$1 .
    docker tag ghcr.io/ombrustou/gpu_monitoring/gathering-data:$1 ghcr.io/ombrustou/gpu_monitoring/gathering-data:lastest
    docker push ghcr.io/ombrustou/gpu_monitoring/gathering-data
}

fct $1