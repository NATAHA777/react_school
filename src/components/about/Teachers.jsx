import React from 'react'
import Card from '../../ui/card/Card'


export default function Teachers() {
  return (
    <Card className="w-full">
        <div className="title_teachers">Педагогический состав</div>
        <div className="teacher_list">
          <div>
            <img src="external/director.png" />
            <div className="teacher_name">
              Александрова <br /> Любовь Васильевна
            </div>
            <div className="degree">Директор школы</div>
          </div>
          <div>
            <img src="external/director.png" />
            <div className="teacher_name">
              Александрова <br /> Любовь Васильевна
            </div>
            <div className="degree">Директор школы</div>
          </div>
          <div>
            <img src="external/director.png" />
            <div className="teacher_name">
              Александрова <br /> Любовь Васильевна
            </div>
            <div className="degree">Директор школы</div>
          </div>
          <div>
            <img src="external/director.png" />
            <div className="teacher_name">
              Александрова <br /> Любовь Васильевна
            </div>
            <div className="degree">Директор школы</div>
          </div>
          <div>
            <img src="external/director.png" />
            <div className="teacher_name">
              Александрова <br /> Любовь Васильевна
            </div>
            <div className="degree">Директор школы</div>
          </div>
          <div>
            <img src="external/director.png" />
            <div className="teacher_name">
              Александрова <br /> Любовь Васильевна
            </div>
            <div className="degree">Директор школы</div>
          </div>
        </div>
        <div className="buttons_arrow">
          <div className="button_left">
            <button>
              <img src="external/button_list_none_active.svg" alt="назад" />
            </button>
          </div>
          <div className="button_right">
            <button>
              <img src="external/button_list_active.svg" alt="далее" />
            </button>
          </div>
        </div>
    </Card>
  );
}
