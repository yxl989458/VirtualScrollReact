export const CopyIns = () => {
    let textArea: HTMLTextAreaElement | null = null;
    let copy: (text: string) => void;

    function isOS() {
        return navigator.userAgent.match(/ipad|iphone/i);
    }

    function createTextArea(text: string) {
        textArea = document.createElement('textArea') as HTMLTextAreaElement;
        textArea!.value = text;
        document.body.appendChild(textArea);
    }

    function selectText() {
        let range: Range
        let selection: Selection | null

        if (isOS()) {
            range = document.createRange();
            range.selectNodeContents(textArea!);
            selection = window.getSelection();
            selection!.removeAllRanges();
            selection!.addRange(range);
            textArea!.setSelectionRange(0, 999999);
        } else {
            textArea!.select();
        }
    }

    function copyToClipboard() {
        document.execCommand('copy');
        document.body.removeChild(textArea!);
    }

    // eslint-disable-next-line prefer-const
    copy = function (text) {
        createTextArea(text);
        selectText();
        copyToClipboard();
    };

    return copy
};

export const Copy = CopyIns()
