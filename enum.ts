// enums
enum StatusEnum {
  Online,
  Ofline,
  Unknown
}

type StatusMessages = {
  [k in keyof typeof StatusEnum]: string;
};

const StatusMessageStrings: StatusMessages = {
  Online: 'You are online',
  Ofline: 'You are offline',
  Unknown: 'You are online',
};