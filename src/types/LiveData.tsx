export type LiveData = {
    online: string[];
    data: { [key: string]: Record };
};

export type Record = {
  cpu: {
    usage: number;
    io_wait?: number;
  };
  ram: {
    used: number;
  };
  swap: {
    used: number;
  };
  load: {
    load1: number;
    load5: number;
    load15: number;
  };
  disk: {
    used: number;
  };
  network: {
    up: number;
    down: number;
    totalUp: number;
    totalDown: number;
  };
  connections: {
    tcp: number;
    udp: number;
  };
  tcp_extra?: {
    time_wait: number;
    retransmit_rate: number;
  };
  disk_io?: {
    read_speed: number;
    write_speed: number;
    avg_queue_len: number;
    avg_wait_time: number;
  };
  net_extra?: {
    rx_dropped: number;
    tx_dropped: number;
    rx_errors: number;
    tx_errors: number;
    softirq_pct: number;
  };
  gpu?: {
    count: number;
    average_usage: number;
    detailed_info: {
      name: string;
      memory_total: number;
      memory_used: number;
      utilization: number;
      temperature: number;
    }[];
  };
  uptime: number;
  process: number;
  message: string;
  updated_at: string;
};

export type LiveDataResponse = {
  data: LiveData;
  status: string;
};
