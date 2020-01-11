FROM envoyproxy/envoy:latest
COPY envoy.yaml /etc/envoy/envoy.yaml
EXPOSE 80
CMD /usr/local/bin/envoy --config-path /etc/envoy/envoy.yaml