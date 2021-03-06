import { __extends } from "tslib";
import { HttpUrlEncodingCodec } from '@angular/common/http';
/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(HttpUrlEncodingCodec));
export { CustomHttpUrlEncodingCodec };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NsYXNzaWZ5LXRleHQtc3dhZ2dlci1jbGllbnQvIiwic291cmNlcyI6WyJlbmNvZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBSSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVoRTs7OztFQUlFO0FBQ0Y7SUFBZ0QsOENBQW9CO0lBQXBFOztJQVNBLENBQUM7SUFSRyw4Q0FBUyxHQUFULFVBQVUsQ0FBUztRQUNmLENBQUMsR0FBRyxpQkFBTSxTQUFTLFlBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsZ0RBQVcsR0FBWCxVQUFZLENBQVM7UUFDakIsQ0FBQyxHQUFHLGlCQUFNLFdBQVcsWUFBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCxpQ0FBQztBQUFELENBQUMsQUFURCxDQUFnRCxvQkFBb0IsR0FTbkUiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbi8qKlxuKiBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlY1xuKiBGaXggcGx1cyBzaWduICgrKSBub3QgZW5jb2RpbmcsIHNvIHNlbnQgYXMgYmxhbmsgc3BhY2VcbiogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTA1OCNpc3N1ZWNvbW1lbnQtMjQ3MzY3MzE4XG4qL1xuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIGV4dGVuZHMgSHR0cFVybEVuY29kaW5nQ29kZWMge1xuICAgIGVuY29kZUtleShrOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBrID0gc3VwZXIuZW5jb2RlS2V5KGspO1xuICAgICAgICByZXR1cm4gay5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcbiAgICB9XG4gICAgZW5jb2RlVmFsdWUodjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdiA9IHN1cGVyLmVuY29kZVZhbHVlKHYpO1xuICAgICAgICByZXR1cm4gdi5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcbiAgICB9XG59XG5cbiJdfQ==