import { HttpUrlEncodingCodec } from '@angular/common/http';
/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NsYXNzaWZ5LXRleHQtc3dhZ2dlci1jbGllbnQvc3JjLyIsInNvdXJjZXMiOlsiZW5jb2Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRTs7OztFQUlFO0FBQ0YsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjtJQUNoRSxTQUFTLENBQUMsQ0FBUztRQUNmLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELFdBQVcsQ0FBQyxDQUFTO1FBQ2pCLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG4vKipcbiogQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWNcbiogRml4IHBsdXMgc2lnbiAoKykgbm90IGVuY29kaW5nLCBzbyBzZW50IGFzIGJsYW5rIHNwYWNlXG4qIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEwNTgjaXNzdWVjb21tZW50LTI0NzM2NzMxOFxuKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlYyBleHRlbmRzIEh0dHBVcmxFbmNvZGluZ0NvZGVjIHtcbiAgICBlbmNvZGVLZXkoazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgayA9IHN1cGVyLmVuY29kZUtleShrKTtcbiAgICAgICAgcmV0dXJuIGsucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XG4gICAgfVxuICAgIGVuY29kZVZhbHVlKHY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHYgPSBzdXBlci5lbmNvZGVWYWx1ZSh2KTtcbiAgICAgICAgcmV0dXJuIHYucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XG4gICAgfVxufVxuXG4iXX0=