#!/bin/bash
sudo apt-get install -y adduser libfontconfig1 musl
wget https://dl.grafana.com/enterprise/release/grafana-enterprise_10.2.3_amd64.deb
sudo dpkg -i grafana-enterprise_10.2.3_amd64.deb

sudo systemctl daemon-reload
sudo systemctl start grafana
sudo systemctl enable grafana-server.service
