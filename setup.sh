#!/bin/sh

install_backend(){
    echo "Installing packages for backend service...\n"
   
    cd ./back
    npm i --silent
    ERR_BACK=$?
    cd ../
}

install_frontend(){
    echo "Installing packages for frontend ...\n"
   
    cd ./front
    npm i --silent
    ERR_FRONT=$?
    cd ../
}

create_env(){
    echo "create environmental file\n"

    cp .env.example .env
}

setup(){
    echo "Start to setup menn.\n"

    install_backend
    if [ "$ERR_BACK" -eq "0" ]
    then
    echo "backend service packages installed successfully\n"
    else
    echo "failed to install backend service packages. please try again \n"
    fi

    install_frontend
    if [ "$ERR_FRONT" -eq "0" ]
    then
    echo "frontend packages installed successfully\n"
    else
    echo "failed to install frontend packages. please try again \n"
    fi

    create_env

    echo "setup has finished\n"
}

setup
