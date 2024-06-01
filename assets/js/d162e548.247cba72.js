"use strict";(self.webpackChunknewdocs=self.webpackChunknewdocs||[]).push([[2824],{5285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var a=n(4848),r=n(8453),s=n(9489),o=n(7227),l=n(94);const d={sidebar_label:"Fine tune LLM on database",filename:"fine_tune_llm_on_database.md"},i="Fine tune LLM on database",c={id:"use_cases/fine_tune_llm_on_database",title:"fine_tune_llm_on_database",description:"Configure your production system",source:"@site/content/use_cases/fine_tune_llm_on_database.md",sourceDirName:"use_cases",slug:"/use_cases/fine_tune_llm_on_database",permalink:"/docs/use_cases/fine_tune_llm_on_database",draft:!1,unlisted:!1,editUrl:"https://github.com/SuperDuperDB/superduperdb/blob/main/docs/hr/content/use_cases/fine_tune_llm_on_database.md",tags:[],version:"current",frontMatter:{sidebar_label:"Fine tune LLM on database",filename:"fine_tune_llm_on_database.md"},sidebar:"tutorialSidebar",previous:{title:"Use cases",permalink:"/docs/category/use-cases"},next:{title:"Multimodal vector search",permalink:"/docs/use_cases/multimodal_vector_search"}},u={},p=[{value:"Configure your production system",id:"configure-your-production-system",level:2},{value:"Start your cluster",id:"start-your-cluster",level:2},{value:"Connect to SuperDuperDB",id:"connect-to-superduperdb",level:2},{value:"Install related dependencies",id:"install-related-dependencies",level:2},{value:"Get LLM Finetuning Data",id:"get-llm-finetuning-data",level:2},{value:"Insert simple data",id:"insert-simple-data",level:2},{value:"Select a Model",id:"select-a-model",level:2},{value:"Build A Trainable LLM",id:"build-a-trainable-llm",level:2},{value:"Load the trained model",id:"load-the-trained-model",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"fine-tune-llm-on-database",children:"Fine tune LLM on database"}),"\n",(0,a.jsx)(t.h2,{id:"configure-your-production-system",children:"Configure your production system"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:'If you would like to use the production features\nof SuperDuperDB, then you should set the relevant\nconnections and configurations in a configuration\nfile. Otherwise you are welcome to use "development" mode\nto get going with SuperDuperDB quickly.'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"import os\n\nos.makedirs('.superduperdb', exist_ok=True)\nos.environ['SUPERDUPERDB_CONFIG'] = '.superduperdb/config.yaml'\n"})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"MongoDB Community",label:"MongoDB Community",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\ndata_backend: mongodb://127.0.0.1:27017/documents\nartifact_store: filesystem://./artifact_store\ncluster:\n  cdc:\n    strategy: null\n    uri: ray://127.0.0.1:20000\n  compute:\n    uri: ray://127.0.0.1:10001\n  vector_search:\n    backfill_batch_size: 100\n    type: in_memory\n    uri: http://127.0.0.1:21000\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"MongoDB Atlas",label:"MongoDB Atlas",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\n        type: native\ndatabackend: mongodb+srv://<user>:<password>@<mongo-host>:27017/documents\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: sqlite://<path-to-db>.db\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mysql://<user>:<password>@<host>:<port>/database\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: mssql://<user>:<password>@<host>:<port>\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: postgres://<user>:<password>@<host>:<port</<database>\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: snowflake://<user>:<password>@<account>/<database>\n'''        \n"})})}),(0,a.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"CFG = '''\nartifact_store: filesystem://<path-to-artifact-store>\nmetadata_store: sqlite://<path-to-sqlite-db>.db\ncluster: \n    compute: ray://<ray-host>\n    cdc:    \n        uri: http://<cdc-host>:<cdc-port>\n    vector_search:\n        uri: http://<vector-search-host>:<vector-search-port>\ndatabackend: clickhouse://<user>:<password>@<host>:<port>\n'''        \n"})})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"with open(os.environ['SUPERDUPERDB_CONFIG'], 'w') as f:\n    f.write(CFG)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"start-your-cluster",children:"Start your cluster"}),"\n",(0,a.jsxs)(t.admonition,{type:"note",children:[(0,a.jsx)(t.p,{children:"Starting a SuperDuperDB cluster is useful in production and model development\nif you want to enable scalable compute, access to the models by multiple users for collaboration,\nmonitoring."}),(0,a.jsx)(t.p,{children:"If you don't need this, then it is simpler to start in development mode."})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Experimental Cluster",label:"Experimental Cluster",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!python -m superduperdb local-cluster up        \n"})})}),(0,a.jsx)(o.A,{value:"Docker-Compose",label:"Docker-Compose",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!make build_sandbox\n!make testenv_init        \n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"connect-to-superduperdb",children:"Connect to SuperDuperDB"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:'Note that this is only relevant if you are running SuperDuperDB in development mode.\nOtherwise refer to "Configuring your production system".'})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"MongoDB",label:"MongoDB",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('mongodb://localhost:27017/documents')        \n"})})}),(0,a.jsx)(o.A,{value:"SQLite",label:"SQLite",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\ndb = superduper('sqlite://my_db.db')        \n"})})}),(0,a.jsx)(o.A,{value:"MySQL",label:"MySQL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'superduper'\npassword = 'superduper'\nport = 3306\nhost = 'localhost'\ndatabase = 'test_db'\n\ndb = superduper(f\"mysql://{user}:{password}@{host}:{port}/{database}\")        \n"})})}),(0,a.jsx)(o.A,{value:"Oracle",label:"Oracle",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'sa'\npassword = 'Superduper#1'\nport = 1433\nhost = 'localhost'\n\ndb = superduper(f\"mssql://{user}:{password}@{host}:{port}\")        \n"})})}),(0,a.jsx)(o.A,{value:"PostgreSQL",label:"PostgreSQL",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!pip install psycopg2\nfrom superduperdb import superduper\n\nuser = 'postgres'\npassword = 'postgres'\nport = 5432\nhost = 'localhost'\ndatabase = 'test_db'\ndb_uri = f\"postgres://{user}:{password}@{host}:{port}/{database}\"\n\ndb = superduper(db_uri, metadata_store=db_uri.replace('postgres://', 'postgresql://'))        \n"})})}),(0,a.jsx)(o.A,{value:"Snowflake",label:"Snowflake",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from superduperdb import superduper\n\nuser = "superduperuser"\npassword = "superduperpassword"\naccount = "XXXX-XXXX"  # ORGANIZATIONID-USERID\ndatabase = "FREE_COMPANY_DATASET/PUBLIC"\n\nsnowflake_uri = f"snowflake://{user}:{password}@{account}/{database}"\n\ndb = superduper(\n    snowflake_uri, \n    metadata_store=\'sqlite:///your_database_name.db\',\n)        \n'})})}),(0,a.jsx)(o.A,{value:"Clickhouse",label:"Clickhouse",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\nuser = 'default'\npassword = ''\nport = 8123\nhost = 'localhost'\n\ndb = superduper(f\"clickhouse://{user}:{password}@{host}:{port}\", metadata_store=f'mongomock://meta')        \n"})})}),(0,a.jsx)(o.A,{value:"DuckDB",label:"DuckDB",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('duckdb://mydb.duckdb')        \n"})})}),(0,a.jsx)(o.A,{value:"Pandas",label:"Pandas",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper(['my.csv'], metadata_store=f'mongomock://meta')        \n"})})}),(0,a.jsx)(o.A,{value:"MongoMock",label:"MongoMock",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import superduper\n\ndb = superduper('mongomock:///test_db')        \n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"install-related-dependencies",children:"Install related dependencies"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"!pip install transformers torch accelerate trl peft datasets\n"})}),"\n",(0,a.jsx)(t.h2,{id:"get-llm-finetuning-data",children:"Get LLM Finetuning Data"}),"\n",(0,a.jsx)(t.p,{children:"The following are examples of training data in different formats."}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduperdb.base.document import Document\ndataset_name = "timdettmers/openassistant-guanaco"\ndataset = load_dataset(dataset_name)\n\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({**example, "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({**example, "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndatas = train_documents + eval_documents        \n'})})}),(0,a.jsx)(o.A,{value:"Prompt-Response",label:"Prompt-Response",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduperdb.base.document import Document\ndataset_name = "mosaicml/instruct-v3"\ndataset = load_dataset(dataset_name)\n\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({**example, "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({**example, "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndatas = train_documents + eval_documents        \n'})})}),(0,a.jsx)(o.A,{value:"Chat",label:"Chat",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from datasets import load_dataset\nfrom superduperdb.base.document import Document\ndataset_name = "philschmid/dolly-15k-oai-style"\ndataset = load_dataset(dataset_name)[\'train\'].train_test_split(0.9)\n\ntrain_dataset = dataset["train"]\neval_dataset = dataset["test"]\n\ntrain_documents = [\n    Document({**example, "_fold": "train"})\n    for example in train_dataset\n]\neval_documents = [\n    Document({**example, "_fold": "valid"})\n    for example in eval_dataset\n]\n\ndatas = train_documents + eval_documents        \n'})})})]}),"\n",(0,a.jsx)(t.p,{children:"We can define different training parameters to handle this type of data."}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Function for transformation after extracting data from the database\ntransform = None\nkey = ('text')\ntraining_kwargs=dict(dataset_text_field=\"text\")        \n"})})}),(0,a.jsx)(o.A,{value:"Prompt-Response",label:"Prompt-Response",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Function for transformation after extracting data from the database\ndef transform(prompt, response):\n    return {'text': prompt + response + \"</s>\"}\n\nkey = ('prompt', 'response')\ntraining_kwargs=dict(dataset_text_field=\"text\")        \n"})})}),(0,a.jsx)(o.A,{value:"Chat",label:"Chat",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"# Function for transformation after extracting data from the database\ntransform = None\n\nkey = ('messages')\ntraining_kwargs=None        \n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Example input_text and output_text"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Text",label:"Text",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'data = datas[0]\ninput_text, output_text = data["text"].rsplit("### Assistant: ", maxsplit=1)\ninput_text += "### Assistant: "\noutput_text = output_text.rsplit("### Human:")[0]\nprint("Input: --------------")\nprint(input_text)\nprint("Response: --------------")\nprint(output_text)        \n'})})}),(0,a.jsx)(o.A,{value:"Prompt-Response",label:"Prompt-Response",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'data = datas[0]\ninput_text = data["prompt"]\noutput_text = data["response"]\nprint("Input: --------------")\nprint(input_text)\nprint("Response: --------------")\nprint(output_text)        \n'})})}),(0,a.jsx)(o.A,{value:"Chat",label:"Chat",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'data = datas[0]\nmessages = data["messages"]\ninput_text = messages[:-1]\noutput_text = messages[-1]["content"]\nprint("Input: --------------")\nprint(input_text)\nprint("Response: --------------")\nprint(output_text)        \n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"insert-simple-data",children:"Insert simple data"}),"\n",(0,a.jsx)(t.p,{children:"After turning on auto_schema, we can directly insert data, and superduperdb will automatically analyze the data type, and match the construction of the table and datatype."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from superduperdb import Document\n\ntable_or_collection = db['documents']\n\nids = db.execute(table_or_collection.insert([Document(data) for data in datas]))\nselect = table_or_collection.select()\n"})}),"\n",(0,a.jsx)(t.h2,{id:"select-a-model",children:"Select a Model"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'model_name = "facebook/opt-125m"\nmodel_kwargs = dict()\ntokenizer_kwargs = dict()\n\n# or \n# model_name = "mistralai/Mistral-7B-Instruct-v0.2"\n# token = "hf_xxxx"\n# model_kwargs = dict(token=token)\n# tokenizer_kwargs = dict(token=token)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"build-a-trainable-llm",children:"Build A Trainable LLM"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Create an LLM Trainer for training"})}),"\n",(0,a.jsxs)(t.p,{children:["The parameters of this LLM Trainer are basically the same as ",(0,a.jsx)(t.code,{children:"transformers.TrainingArguments"}),", but some additional parameters have been added for easier training setup."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from superduperdb.ext.transformers import LLM, LLMTrainer\ntrainer = LLMTrainer(\n    identifier="llm-finetune-trainer",\n    output_dir="output/finetune",\n    overwrite_output_dir=True,\n    num_train_epochs=3,\n    save_total_limit=3,\n    logging_steps=10,\n    evaluation_strategy="steps",\n    save_steps=100,\n    eval_steps=100,\n    per_device_train_batch_size=1,\n    per_device_eval_batch_size=1,\n    gradient_accumulation_steps=2,\n    max_seq_length=512,\n    key=key,\n    select=select,\n    transform=transform,\n    training_kwargs=training_kwargs,\n)\n'})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Lora",label:"Lora",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"trainer.use_lora = True        \n"})})}),(0,a.jsx)(o.A,{value:"QLora",label:"QLora",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"trainer.use_lora = True\ntrainer.bits = 4        \n"})})}),(0,a.jsx)(o.A,{value:"Deepspeed",label:"Deepspeed",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'!pip install deepspeed\ndeepspeed = {\n    "train_batch_size": "auto",\n    "train_micro_batch_size_per_gpu": "auto",\n    "gradient_accumulation_steps": "auto",\n    "zero_optimization": {\n        "stage": 2,\n    },\n}\ntrainer.use_lora = True\ntrainer.bits = 4\ntrainer.deepspeed = deepspeed        \n'})})}),(0,a.jsx)(o.A,{value:"Multi-GPUS",label:"Multi-GPUS",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"trainer.use_lora = True\ntrainer.bits = 4\ntrainer.num_gpus = 2        \n"})})})]}),"\n",(0,a.jsx)(t.p,{children:"Create a trainable LLM model and add it to the database, then the training task will run automatically."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'llm = LLM(\n    identifier="llm",\n    model_name_or_path=model_name,\n    trainer=trainer,\n    model_kwargs=model_kwargs,\n    tokenizer_kwargs=tokenizer_kwargs,\n)\n\ndb.apply(llm)\n'})}),"\n",(0,a.jsx)(t.h2,{id:"load-the-trained-model",children:"Load the trained model"}),"\n",(0,a.jsx)(t.p,{children:"There are two methods to load a trained model:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Load the model directly"}),": This will load the model with the best metrics (if the transformers' best model save strategy is set) or the last version of the model."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Use a specified checkpoint"}),": This method downloads the specified checkpoint, then initializes the base model, and finally merges the checkpoint with the base model. This approach supports custom operations such as resetting flash_attentions, model quantization, etc., during initialization."]}),"\n"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"Load Trained Model Directly",label:"Load Trained Model Directly",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'llm = db.load("model", "llm")        \n'})})}),(0,a.jsx)(o.A,{value:"Use a specified checkpoint",label:"Use a specified checkpoint",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from superduperdb.ext.transformers import LLM, LLMTrainer\nexperiment_id = db.show("checkpoint")[-1]\nversion = None # None means the last checkpoint\ncheckpoint = db.load("checkpoint", experiment_id, version=version)\nllm = LLM(\n    identifier="llm",\n    model_name_or_path=model_name,\n    adapter_id=checkpoint,\n    model_kwargs=dict(load_in_4bit=True)\n)        \n'})})})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"llm.predict_one(input_text, max_new_tokens=200)\n"})}),"\n",(0,a.jsx)(l.A,{filename:"fine_tune_llm_on_database.md"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540);const r=e=>{const t=Array.from(document.querySelectorAll('.tabs > li[role="tab"]')).filter((e=>"true"===e.getAttribute("aria-selected"))).map((e=>e.textContent.trim()));console.log("About to process filename:",e),console.log("Selected tabs:",t);const n=`_${e.replace(/\.md$/,".ipynb")}`,a=encodeURIComponent(n);fetch(`https://build-use-cases-sddb.replit.app/build_notebook?usecase_path=.%2Fuse_cases%2F${a}`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then((e=>e.blob())).then((e=>{const t=window.URL.createObjectURL(e),a=document.createElement("a");a.style.display="none",a.href=t,a.download=n,document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(t),alert("Your file has downloaded!")})).catch((()=>alert("There was an error."))),console.log("Sending JSON payload:",JSON.stringify(t))};var s=n(4848);const o=e=>{let{filename:t}=e;if(!t)return console.error("Filename is not provided or invalid."),null;const[n,o]=(0,a.useState)(!1),l={padding:"10px",borderRadius:"10px",border:"0",color:"#000",backgroundColor:"#C4F800",fontWeight:"bold",cursor:"pointer"};return(0,s.jsx)("button",{style:n?{...l,backgroundColor:"#B0E000"}:l,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),onClick:()=>r(t),children:"Generate notebook from all selected tabs"})}},7227:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(870);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>v});var a=n(6540),r=n(870),s=n(4245),o=n(6347),l=n(6494),d=n(2814),i=n(5167),c=n(1269);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,d.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,d]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,u]=m({queryString:n,groupId:r}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=i??f;return h({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&d(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=n(4848);function g(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),r=l[n].value;r!==a&&(i(t),o(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,_.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>d.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,_.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,_.jsx)(g,{...e,...t}),(0,_.jsx)(j,{...e,...t})]})}function v(e){const t=(0,b.A)();return(0,_.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);