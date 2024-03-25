interface IFetchStreamOptions {
  url: string;
  requestInit: RequestInit;
  onmessage: (data: string, index: number) => void;
  undone?: () => void;
  onerror?: (response: Response) => void;
}

class FetchStream {
  timer: number = 0
  controller: AbortController | null = null
  url: string;
  requestInit: RequestInit;
  onmessage: IFetchStreamOptions['onmessage'];
  undone: IFetchStreamOptions['undone'];
  onerror: IFetchStreamOptions['onerror'];

  constructor(options: IFetchStreamOptions) {
    this.url = options.url;
    this.requestInit = options.requestInit;
    this.onmessage = options.onmessage;
    this.undone = options.undone;
    this.onerror = options.onerror;
    this.createFetchRequest();
  }

  createFetchRequest() {
    this.controller = new AbortController();
    fetch(this.url, {
      method: 'POST',
      signal: this.controller.signal,
      ...this.requestInit
    }).then(response => {
      if (response.status === 200) {
        return response.body!;
      } else {
        return Promise.reject(response);
      }
    }).then(async (readableStream) => {
      const reader = readableStream.getReader();
      let index: number = 0;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          this.undone?.();
          break;
        } else {
          const dataText = new TextDecoder().decode(value);
          this.onmessage(dataText, index++);
        }
      }
    }).catch(response => {
      this.onerror?.(response);
    });
  }
  abort() {
    this.controller && this.controller.abort()
  }
}


export default FetchStream
