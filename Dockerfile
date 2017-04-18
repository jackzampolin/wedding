FROM centos:7 

###############################################################################

LABEL name="NodeJS application" \
      license="MIT" \
      vendor="gongled" \
      maintainer="Gleb E Goncharov" \
      build-date="2017-04-18"

###############################################################################

ARG KAOS_REPO_VER="8.0"

###############################################################################

RUN yum -y install epel-release && \
    yum -y install https://yum.kaos.io/7/release/x86_64/kaos-repo-${KAOS_REPO_VER}-0.el7.noarch.rpm && \
    yum -y update && \
    yum -y install webkaos webkaos-nginx nodejs && \
    yum -y clean all 

###############################################################################

COPY . /app
COPY service.conf /etc/nginx/conf.d/service.conf

###############################################################################

RUN bash /app/build.sh && \
    find /app -type d -exec chmod 775 {} \; && \
    find /app -type f -exec chmod 644 {} \;

###############################################################################

VOLUME /app

###############################################################################

EXPOSE 8080

###############################################################################

ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]

###############################################################################
